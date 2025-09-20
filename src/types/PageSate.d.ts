export type HomeProps = {
  onStart: () => void;
  onLogout: () => void;
  user: { email: string } | null;
};
