import React from 'react';
import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/BlenderStore';

const ResultComp = observer(() => (
  <div>
    <h>Результат:</h>
    <p>
      {blenderStore.selectedNumbers.join(' + ')} {`->`} {blenderStore.result}
    </p>
  </div>
));

export default ResultComp;