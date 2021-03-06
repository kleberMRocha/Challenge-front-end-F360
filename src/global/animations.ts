import {keyframes} from 'styled-components';

export const entrance = keyframes`
  from {
    transform: translate(-999px, 0px);
  }

  to {
    transform: translate(0px, 0px);
}
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const appearRight = keyframes`
  from {
    transform: translate(999px, 0px);
  }

  to {
    transform: translate(0px, 0px);
}
`;

export const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    transform: 1;
}
`;