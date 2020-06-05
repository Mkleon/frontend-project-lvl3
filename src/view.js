import { watch } from 'melanke-watchjs';

const watchers = {
  watchData: (data) => {
    watch(data, () => {
      console.log(data);
    });
  },
};

export default watchers;
