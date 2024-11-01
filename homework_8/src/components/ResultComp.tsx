import { observer } from 'mobx-react-lite';
import { blenderStore } from '../store/BlenderStore';

const ResultComp = observer(() => (
  <div>
    <h1>Результат:</h1>
    <p>
      {blenderStore.selectedNumbers.join(' + ')} {`->`} {blenderStore.result}
    </p>
  </div>
));

export default ResultComp;