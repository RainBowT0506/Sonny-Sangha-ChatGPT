import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-2 text-center">
        {renderExamples()}

        {renderCapabilities()}

        {renderLimitations()}
      </div>
    </div>
  );

  function renderExamples() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <SunIcon className="h-8 w-8" />

          <h2>Examples</h2>
        </div>

        <div className="space-y-7">
          <p className="infoText">"Explain Something to me"</p>
          <p className="infoText">
            "What is the difference between a dog and a cat?"
          </p>
          <p className="infoText">"What is the color of the sun?"</p>
        </div>
      </div>
    );
  }

  function renderCapabilities() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <BoltIcon className="h-8 w-8" />

          <h2>Capabilities</h2>
        </div>

        <div className="space-y-7">
          <p className="infoText">"Explain Something to me"</p>
          <p className="infoText">
            "What is the difference between a dog and a cat?"
          </p>
          <p className="infoText">"What is the color of the sun?"</p>
        </div>
      </div>
    );
  }

  function renderLimitations() {
    return (
      <div>
        <div className="flex flex-col items-center justify-center mb-5">
          <ExclamationTriangleIcon className="h-8 w-8" />

          <h2>Limitations</h2>
        </div>

        <div className="space-y-7">
          <p className="infoText">"Explain Something to me"</p>
          <p className="infoText">
            "What is the difference between a dog and a cat?"
          </p>
          <p className="infoText">"What is the color of the sun?"</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
