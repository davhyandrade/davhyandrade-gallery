import MuiRadio from '@mui/material/Radio';
import RadioIcon from './radio-icon/RadioIcon.component';

import { RadioComponentProps } from './Radio.types';

function Radio({ color, ...restProps }: RadioComponentProps) {
  return (
    <MuiRadio
      {...restProps}
      icon={<RadioIcon color={color} />}
      checkedIcon={<RadioIcon color={color} />}
      sx={{ padding: 0 }}
    />
  );
}

export default Radio;
