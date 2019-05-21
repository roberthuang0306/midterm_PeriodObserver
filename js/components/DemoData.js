'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var DemoData = {
    resources: [{
        id: 'r0',
        name: 'the safe period',
    }, {
        id: 'r1',
        name: 'the unsafe period',
    },{
        id: 'r2',
        name: 'ovulatory period',
    }, {
        id: 'r3',
        name: 'the Period',
    },],
    events: [{
        id: 1,
        start: '2019-05-16',
        end: '2019-05-17 23:30:00',
        resourceId: 'r1',
        title: 'I am finished',
        bgColor: '#D9D9D9',
        showPopover: false
    }, {
        id: 2,
        start: '2019-05-16 12:30:00',
        end: '2019-05-22 23:30:00',
        resourceId: 'r2',
        title: 'I am not resizable',
        resizable: false
    }, ]
};

exports.default = DemoData;