import { withInstallFunction } from "@yumyum-ui/utils";

import Message from "./src/method";

export const YumMessage = withInstallFunction(Message, '$message');

export default YumMessage;

export * from './src/message';