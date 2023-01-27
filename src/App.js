import twitterLogo from './assets/twitter-logo.svg';
import BobRossLogo from './assets/bobby.svg';
import './App.css';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">👨‍🎨 Bob Ross Portal</p>
          <p className="sub-text">
            View your Bob Ross image collection in the metaverse ✨
          </p>
          <img alt="Bobby Ross" className="bob-ross" src={BobRossLogo} />
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
