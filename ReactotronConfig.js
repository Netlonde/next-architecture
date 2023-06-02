// eslint-disable-next-line import/no-extraneous-dependencies
import tronsauce from 'reactotron-apisauce';
import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') Reactotron.configure().use(tronsauce()).connect();

export default Reactotron;
