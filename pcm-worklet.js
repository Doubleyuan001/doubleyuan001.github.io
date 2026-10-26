class FrogPCM extends AudioWorkletProcessor{process(inputs,outputs){const channel=inputs[0]?.[0];if(channel)this.port.postMessage(new Float32Array(channel));for(const out of outputs)for(const c of out)c.fill(0);return true;}}
registerProcessor('frog-pcm',FrogPCM);
