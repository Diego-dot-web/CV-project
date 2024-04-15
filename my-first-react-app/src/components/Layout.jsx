import { useState } from 'react';
import GeneralInformation from './GeneralInformation';
import Education from './Education';
import Experience from './Experience';

export function Layout() {
  const [isSent, setIsSent] = useState(false);

  return (
    <div>
      <GeneralInformation isSent={isSent} />
      <Education isSent={isSent} />
      <Experience isSent={isSent} />
      <button
        onClick={() => {
          setIsSent(!isSent);
        }}
      >
        {isSent ? 'Edit CV' : 'Send CV'}
      </button>
    </div>
  );
}
