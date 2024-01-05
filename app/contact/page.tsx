export default function Contact() {
  return (
    <div className="flex justify-center items-center flex-col mt-8 sm:mt-20">
      <h1 className="text-4xl sm:text-6xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        hey
      </h1>

      <p className="text-center">
        Did we manage to get the attention of the press? Or do you just have a
        question?
        <br />
        Feel free to reach out!
        <br />
        <br />
        <a href="mailto:srleviton@gmail.com" className="text-blue-800">
          srleviton@gmail.com
        </a>
      </p>
    </div>
  );
}
