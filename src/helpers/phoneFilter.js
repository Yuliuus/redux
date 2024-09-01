export function phoneFilter(phonenumber) {
    const phoneCutter = phonenumber.split(' ')[0];
    const dotsRemover = phoneCutter.replaceAll('.', '-');
    return dotsRemover;
}
