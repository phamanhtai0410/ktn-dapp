import Spinner from 'react-spinner-material';
import React from 'react';

const PageLoading: React.FC = (): JSX.Element => {
    return (
        <div>
          <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
        </div>
    );
}

export default PageLoading;