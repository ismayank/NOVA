export interface InlineMessage {
  id: string;
  sender: string;
  time: string;
  text: string;
  isSelf?: boolean;
}

export const initialInlineMessages: InlineMessage[] = [
  {
    id: 'im-1',
    sender: 'Navatej kumar',
    time: '12.55pm',
    text: 'Hey Tushara, can you send me the revised investor deck?',
  },
  {
    id: 'im-2',
    sender: 'Tushara Sree',
    time: '12.56pm',
    text: "Yes, I'll update it and share it by EOD.",
  },
  {
    id: 'im-3',
    sender: 'Navatej kumar',
    time: '12.56pm',
    text: 'Great, thanks!',
  },
  {
    id: 'im-4',
    sender: 'Navatej kumar',
    time: '12.56pm',
    text: "Also, let's include the new metrics we discussed.",
  },
  {
    id: 'im-5',
    sender: 'Tushara Sree',
    time: '12.57pm',
    text: "Sure, I'll update , anything specific you want me to highlight?",
  },
  {
    id: 'im-6',
    sender: 'Navatej kumar',
    time: '12.57pm',
    text: 'The updated ARR forecast & customer accquisition tred, Make sure to highlight the Q3 number.',
  },
  {
    id: 'im-7',
    sender: 'Tushara Sree',
    time: '12.55pm',
    text: 'Got it. Will do.',
  },
  {
    id: 'im-8',
    sender: 'Navatej kumar',
    time: '12.55pm',
    text: "Perfect, let me know once it's ready.",
  },
];

export const SUGGESTED_DRAFT_TEXT = `"Hi Navatej, quick follow-up on the revised investor deck. I'll include the updated metrics (ARR forecast and customer acquisition trend) and share it shortly."`;

export const QUICK_REPLIES = ['Yes, I can.', 'Yes', 'Working on it.'];
