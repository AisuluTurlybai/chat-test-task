export type TChatInputBarProps = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  onVoiceInput?: () => void;
  disabled?: boolean;
};