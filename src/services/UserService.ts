import Vue from 'vue';
import AccountApiService from '@/services/AccountApiService';

export default new Vue({
  methods: {
    getUsersMetrics(ownerId: string) {
      if (ownerId && ownerId !== 'null') {
        // console.log('process.env.VUE_APP_BASE_URL::' + process.env.BASE_URL);
        return AccountApiService.get(`/account-api/owner/${ownerId}/metrics`);
      }
    },
  },
});
