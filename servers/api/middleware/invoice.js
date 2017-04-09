import templates from '../email';
import { statusCodes } from '../../constants';
import pdf from 'html-pdf';
import sendEmail from './email.js';
import moment from 'moment';
import Logger from '../Logger';
import { aws } from '../config';

const
    options = {
        format: 'Letter'
    },
    logger = new Logger();

function invoice(req, res) {
    const
        { data } = req.body,
        receiptTemplate = templates['receipt'].template,
        invoiceTemplate = templates['invoice'].template,
        modifiedData = {
            ...data,
            date_created: moment(data.date_created).format('YYYY-MM-DD')
        },
        invoiceHtml = invoiceTemplate(modifiedData),
        receiptHtml = receiptTemplate(modifiedData);

    logger.add({
        req,
        params: req.body,
        statusCode: statusCodes.OK,
        time: 0
    });

    pdf
        .create(invoiceHtml, options)
        .toBuffer((errInvoice, datInvoice) => {
            if (!errInvoice) {
                pdf
                    .create(receiptHtml, options)
                    .toBuffer((errReceipt, datReceipt) => {
                        if (!errReceipt) {
                            req.body.attachments = [
                                { content: datInvoice.toString('base64'), name: 'invoice.pdf' },
                                { content: datReceipt.toString('base64'), name: 'receipt.pdf' }
                            ];
                            req.body.data = modifiedData;
                            req.body.email = aws.SELLERS;

                            sendEmail(req, res);
                        } else {
                            console.log('Cannot create receipt pdf');
                            console.log(errReceipt);
                        }
                    });
            } else {
                console.log('Cannot create invoice pdf');
                console.log(errInvoice);
            }
        });
}

export default invoice;
