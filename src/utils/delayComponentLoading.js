export default function DelayedComponent(promise) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(promise), 5000); // 1.5 seconds delay
  });
}
