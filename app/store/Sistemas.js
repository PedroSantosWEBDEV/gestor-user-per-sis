/*
 * File: app/store/Sistemas.js
 *
 * This file was generated by Sencha Architect version 4.2.9.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 7.3.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 7.3.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Sistemas', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Sistemas',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Sistemas',
            model: 'MyApp.model.Sistemas',
            proxy: {
                type: 'ajax',
                url: '../../ext-codeigniter/core.php?action=core&metodo=listaSistemas',
                reader: {
                    type: 'json',
                    rootProperty: 'dados'
                }
            }
        }, cfg)]);
    }
});