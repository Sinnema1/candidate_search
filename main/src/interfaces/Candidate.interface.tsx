export default interface Candidate {
  readonly name: string | null;
  readonly login: string;
  readonly location: string | null;
  readonly avatar_url: string;
  readonly email: string | null;
  readonly html_url: string;
  readonly company: string | null;
  readonly bio: string | null;
}
