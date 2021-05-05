import {memo} from 'react';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://github.com/covid19india"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data & Application Forked from covid19india for covid19.org.in
        </a>
      </div>
      <div className="link">
        <a
          href="https://conceptive.co.in"
          target="_blank"
          rel="noopener noreferrer"
        >
         COVID19.org.in   - A Division of Conceptive Consulting
        </a>
      </div>



    </footer>
  );
}

export default memo(Footer);
