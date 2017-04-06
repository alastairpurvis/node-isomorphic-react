/**
 * MIT License
 *
 * Copyright (c) 2017 Skin Moderne Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const
    storesListeners = {},
    storesCallbacks = {};

function storeListener(storeName) {
    return (...args) => {
        (storesCallbacks[storeName] || []).forEach(listener => listener(...args));
    };
}

function watchStores(...storesName) {
    return {
        componentWillMount() {
            if (this.getStoresState) {
                this.setState(this.getStoresState());
            }

            this.handleStoreChange = this.handleStoreChange.bind(this);
        },

        componentDidMount() {
            this.getWatchStores((storeName, store) => {
                if (!storesListeners[storeName]) {
                    var listener = storeListener(storeName);

                    storesListeners[storeName] = listener;
                    storesCallbacks[storeName] = [];
                    store.on('change', listener);
                }

                storesCallbacks[storeName].push(this.handleStoreChange);
            });
            this.componentIsMounted = true;

        },

        componentWillUnmount() {
            this.getWatchStores((storeName, store) => {
                var callbacks = [];

                storesCallbacks[storeName].forEach(callback => {
                    if (callback !== this.handleStoreChange) {
                        callbacks.push(callback);
                    }
                });

                storesCallbacks[storeName] = callbacks;

                if (!callbacks.length) {
                    store.removeListener('change', storesListeners[storeName]);
                    storesListeners[storeName] = undefined;
                    storesCallbacks[storeName] = undefined;
                }
            });
            this.componentIsMounted = false;
        },

        handleStoreChange() {
            this.componentIsMounted && this.setState(this.getStoresState ? this.getStoresState() : {});
        },

        getWatchStores(cb) {
            storesName.forEach(storeName => cb(storeName, (this.context.getStore || this.props.context.getStore)(storeName)));
        }
    };
}

export default watchStores;