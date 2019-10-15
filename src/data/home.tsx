import * as React from "react"

export default {
  title: {
    en: "Home",
    jp: "",
    zh: "首页",
  },
  description: {
    en: "React hook for form validation without the hassle",
    jp: "",
    zh: "",
  },
  slogan: {
    en:
      "Performant, flexible and extensible forms with easy to use for validation.",
    jp: "",
    zh: "",
  },
  getStarted: {
    en: "Get Started",
    jp: "始めましょう",
    zh: "起步",
  },
  demo: {
    en: "Demo",
    jp: "デモ",
    zh: "演示",
  },
  findInteresting: {
    en: {
      heading: "Find it useful and interesting?",
      description: `Form validation should be much simpler. React Hook Form will lead you to write less code and have better performance. Check out the get started section and learn more on the API documentation page.`,
    },
    jp: {
      heading: "",
      description: ``,
    },
    zh: {
      heading: "",
      description: ``,
    },
  },
  features: {
    en: [
      {
        title: "DX",
        description: `Aimed to provide API so it provides a seamless experience to developers when building forms.`,
      },
      {
        title: "HTML standard",
        description: `Leverage your existing HTML markup, and start validating your forms with constraint validation API.`,
      },
      {
        title: "Super Light",
        description: `Performance is important and packages size matters. it is a tiny library and without any dependencies.`,
      },
      {
        title: "Performance",
        description: `Minimizes the number of re-renders and faster mount, striving to provide the best user experience.`,
      },
      {
        title: "Adoptable",
        description: `Since form state is inherently local, it can be easily adopted without other dependencies.`,
      },
    ],
    jp: [
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
    ],
    zh: [
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
      {
        title: "",
        description: "",
      },
    ],
  },
  codeComparison: {
    en: {
      title: "Library Code Comparison",
      description: `Reducing the amount of code that you have to write is one of the primary goals for React Hook Form. To illustrate that, let's look at a very simple form of validation among some of the most popular form validation libraries.`,
    },
    jp: {
      title: "",
      description: "",
    },
    zh: {
      title: "",
      description: "",
    },
  },
  rendering: {
    en: {
      title: "Reduce Rendering",
      description: `Do you ever wonder how many component re-renders have been triggered by the user? React Hook Form embraces uncontrolled form validation to reduce unnecessary performance impact.`,
      totalReRender: "Total re-renders:",
    },
    jp: {
      title: "",
      description: "",
    },
    zh: {
      title: "",
      description: "",
      totalReRender: "",
    },
  },
  mount: {
    en: {
      title: "Faster Mounting",
      description: (
        <p>
          The following results demonstrate: how long it took to render the
          components. Results are captured under 6x CPU slow down on App start
          with Chrome dev tools' performance tab, and code is from the section
          above <a href="#codeComparison">Library Code Comparison</a>.
        </p>
      ),
      totalMount: "No. of mount(s)",
      totalChange: "No. of committing change(s)",
      totalTime: "Total time",
      performanceTests: (
        <>
          <span style={{ fontSize: 20 }}>⚠</span> Want to see more intense
          performance tests?{" "}
          <a
            href="https://github.com/bluebill1049/react-hook-form-performance-compare"
            rel="noopener noreferrer"
          >
            Check out the result of 1000 fields within a form here
          </a>
          .
        </>
      ),
    },
    jp: {
      title: "",
      description: "",
      totalMount: "",
      totalChange: "",
      totalTime: "",
      performanceTests: "",
    },
    zh: {
      title: "",
      description: "",
      totalMount: "",
      totalChange: "",
      totalTime: "",
      performanceTests: "",
    },
  },
  liveDemo: {
    en: {
      title: "Live Demo",
      description: (
        <>
          The following form demonstrates form validation in action. Each column
          represents what has been captured in the custom hook. You can also
          change fields in the form by clicking the <strong>EDIT</strong>{" "}
          button.
        </>
      ),
      example: "Example",
      submit: "Submit",
      edit: "Edit",
      watchTitle: "Watch",
      errorTitle: "Errors",
      touchedTitle: 'Touched',
      watch: "Change input value to see watched values.",
      error: "Validation errors will appear here.",
      touched: "Touched fields will display here.",
    },
    jp: {
      title: "现场演示",
      description: "",
      example: "",
      submit: "",
      edit: "",
    },
    zh: {
      title: "现场演示",
      description: "",
      example: "",
      submit: "",
      edit: "",
    },
  },
}
