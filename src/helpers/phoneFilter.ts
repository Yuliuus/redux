export function phoneFilter(phonenumber: string) {
  const phoneCutter = phonenumber.split(" ")[0];
  const dotsRemover = phoneCutter.replaceAll(".", "-");
  return dotsRemover;
}
