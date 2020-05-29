<template>
  <div class="about">

    {{JSON.parse(str).id.entityType}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      device: {
        id: { entityType: '', id: '' },
        createTime: '',
        customerId: { entityType: '', id: '' },
        tenantId: { entityType: '', id: '' },
        additionalInfo: {},
        name: '',
        type: '',
        label: '',
      },
      str: '{"id":{"entityType":"DEVICE","id":"95f9f7a0-9bbe-11ea-863a-b53e4a73af9b"}}',
    };
  },
  mounted() {
    // var str = "{"id":{"entityType":"DEVICE","id":"95f9f7a0-9bbe-11ea-863a-b53e4a73af9b"},
    // "createdTime":1590105345050,"additionalInfo":null,"tenantId":{"entityType":"TENANT",
    // "id":"c1a12be0-6f30-11ea-ae19-0f6b71de8ab6"},"customerId":{"entityType":"CUSTOMER",
    // "id":"13814000-1dd2-11b2-8080-808080808080"},"name":"Water meter A-2",
    // "type":"water sensour","label":"Area 1"}
    // this.device.id = {
    //   "entityType": "DEVICE",
    // };


    // this.device.id = new Map(['entityType', 'DEVICE'],
    //  ['id', '95f9f7a0-9bbe-11ea-863a-b53e4a73af9b']);
    // this.device.tenantId = new Map(['entityType', 'DEVICE'],
    // ['id', '95f9f7a0-9bbe-11ea-863a-b53e4a73af9b']);
    // this.device.customerId = new Map(['entityType', 'DEVICE'],
    //  ['id', '95f9f7a0-9bbe-11ea-863a-b53e4a73af9b']);
    // // .set('entityType', 'DEVICE');
    // this.device.id.set('id', '95f9f7a0-9bbe-11ea-863a-b53e4a73af9b');
    // this.device.tenantId.set('entityType', 'TENANT');
    // this.device.tenantId.set('id', 'c1a12be0-6f30-11ea-ae19-0f6b71de8ab6');
    // this.device.customerId.set('entityType', 'CUSTOMER');
    // this.device.customerId.set('id', '13814000-1dd2-11b2-8080-808080808080');
    // this.device.createTime = '1590105345050';
    // this.device.name = 'PLC';
    // this.device.type = 'default';
    // this.device.label = 'label1';
    // window.console.log(this.device);
  },
};
</script>
