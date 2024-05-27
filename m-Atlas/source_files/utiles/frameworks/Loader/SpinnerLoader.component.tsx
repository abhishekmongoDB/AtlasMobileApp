import React, { useEffect } from 'react';

import Spinner from './spinner';
// import { isFunction, isNotNullAndUndefined } from '../../app_utiles/Lodash.utils';
import { useLoader } from '../../../context/universal/Loader/Loader.context';
import { isFunction, isNotNullAndUndefined } from '../../app_utiles/Lodash.utils';

// import { isFunction, isNotNullAndUndefined } from '../../global/Lodash.utiles';
// import { isFunction, isNotNullAndUndefined } from '../../../utils/AppUtils.utils';
const LOADER_DEFAULT_TIMEOUT = 15000;

interface LoaderProps {
  loading: boolean | undefined;
  setShowLoader?: (show: boolean) => void;
}

const SpinnerLoader: React.FC<LoaderProps> = ({ loading, setShowLoader }) => {
  const { updateLoaderValue, showLoader } = useLoader();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isNotNullAndUndefined(setShowLoader) && isFunction(updateLoaderValue)) {
      timeoutId = setTimeout(() => {
        if (isFunction(updateLoaderValue)) {
          updateLoaderValue(false);
        }
        if (isNotNullAndUndefined(setShowLoader)) {
        if (setShowLoader) {
            setShowLoader(false);
        }
        }
      }, LOADER_DEFAULT_TIMEOUT);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [setShowLoader, updateLoaderValue]);

  return <Spinner visible={loading || showLoader} />;
};

export default SpinnerLoader;
