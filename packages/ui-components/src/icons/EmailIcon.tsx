import { Icon, IconProps } from '@chakra-ui/react';
import React, { FC } from 'react';

const EmailIcon: FC<Omit<IconProps, 'children' | 'css'>> = props => (
  <Icon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M1.66675 3.83337L8.47085 8.59624C9.02182 8.98193 9.29731 9.17477 9.59697 9.24946C9.86166 9.31544 10.1385 9.31544 10.4032 9.24946C10.7029 9.17477 10.9783 8.98193 11.5293 8.59624L18.3334 3.83337M5.66675 14.6667H14.3334C15.7335 14.6667 16.4336 14.6667 16.9684 14.3942C17.4388 14.1545 17.8212 13.7721 18.0609 13.3017C18.3334 12.7669 18.3334 12.0668 18.3334 10.6667V5.33337C18.3334 3.93324 18.3334 3.23318 18.0609 2.6984C17.8212 2.22799 17.4388 1.84554 16.9684 1.60586C16.4336 1.33337 15.7335 1.33337 14.3334 1.33337H5.66675C4.26662 1.33337 3.56655 1.33337 3.03177 1.60586C2.56137 1.84554 2.17892 2.22799 1.93923 2.6984C1.66675 3.23318 1.66675 3.93324 1.66675 5.33337V10.6667C1.66675 12.0668 1.66675 12.7669 1.93923 13.3017C2.17892 13.7721 2.56137 14.1545 3.03177 14.3942C3.56655 14.6667 4.26662 14.6667 5.66675 14.6667Z"
      stroke="#525252"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default EmailIcon;
