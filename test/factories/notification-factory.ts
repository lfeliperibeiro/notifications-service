import {
  Notification,
  NotificationsProps,
} from '@application/entities/notification';
import { Content } from '@application/entities/content';

type Override = Partial<NotificationsProps>;
export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('any content'),
    recipientId: 'recipient-2',
    ...override,
  });
}
