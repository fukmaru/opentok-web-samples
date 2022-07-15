<template>
  <div id="session" @error="errorHandler">
    <publisher :session="session" @error="errorHandler" :opts="publisherProperties"></publisher>
    <div id="subscribers" v-for="stream in streams" :key="stream.streamId">
      <subscriber @error="errorHandler" :stream="stream" :session="session"></subscriber>
    </div>
  </div>
</template>

<script>
import OT from '@opentok/client';
import Publisher from '@/components/Publisher.vue';
import Subscriber from '@/components/Subscriber.vue';

const errorHandler = err => {
  alert(err.message);
};

export default {
  name: 'session',
  components: { Publisher, Subscriber },
  props: {
    apiKey: {
      type: String,
      default: process.env.VUE_APP_API_KEY
    },
    sessionId: {
      type: String,
      default: process.env.VUE_APP_SESSION_ID
    },
    token: {
      type: String,
      default: process.env.VUE_APP_TOKEN
    }
  },
  created() {
    this.session = OT.initSession(this.apiKey, this.sessionId);

    this.session.connect(this.token, err => {
      if (err) {
        errorHandler(err);
      }
    });

    this.session.on('streamCreated', event => {
      console.log('streamCreated event', event)
      this.streams.push(event.stream);
    });
    this.session.on('streamDestroyed', event => {
      console.log('streamDestroyed event', event)
      const idx = this.streams.indexOf(event.stream);
      if (idx > -1) {
        this.streams.splice(idx, 1);
      }
    });
  },
  data: () => ({
    streams: [],
    session: null,
    publisherProperties: {
      audioBitrate: 8000, // NC:64000
      audioFallbackEnabled: falase, // NC: false
      autoGainControl: true, // default true
      disableAudioProcessing: false, // default false
      echoCancellation: true, // default: true
      enableStereo: false, // default: false
    }
  }),
  methods: {
    errorHandler
  }
};
</script>

<style>
.OT_subscriber {
  float: left;
}
.OT_publisher {
  float: left;
}
</style>
