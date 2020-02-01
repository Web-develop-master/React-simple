import * as React from "react"
import { navigate } from "@reach/router"
import Form from "./Form"
import Header from "./Header"
import CodeCompareSection from "./CodeCompareSection"
import CodePerfCompareSection from "./CodePerfCompareSection"
import IsolateRender from "./IsolateRender"
import FooterContent from "./Footer"
import Builder from "./BuilderPage"
import { H1 } from "../styles/typography"
import { ButtonsGroup, PrimaryButton } from "../styles/buttons"
import { CenterContent } from "../styles/containers"
import FeaturesList from "./FeaturesList"
import { useStateMachine } from "little-state-machine"
import home from "../data/home"
import translateLink from "./logic/translateLink"
import styles from "./HomePage.module.css"

const { useState, useRef, useEffect } = React

const options = {
  rootMargin: "0px 0px",
  threshold: [1],
}

function HomePage({
  location,
  defaultLang,
}: {
  location: {
    search: string
    pathname: string
  }
  defaultLang: string
}) {
  const [submitData, updateSubmitData] = useState({})
  const [showBuilder, toggleBuilder] = useState(false)
  const HomeRef = useRef(null)
  const [isPlayFeature, setFeaturePlay] = useState(false)
  const [isPlayCodeCompare, setCodeComparePlay] = useState(false)
  const [isIsolatePlay, setIsolatePlay] = useState(false)
  const [isPlayRender, setRenderPlay] = useState(false)
  const [formUpdated, setFormUpdated] = useState(false)
  const {
    state: { language },
  } = useStateMachine()
  const { currentLanguage } =
    language && language.currentLanguage
      ? language
      : { currentLanguage: defaultLang }

  const onSubmit = data => {
    updateSubmitData(data)
  }

  useEffect(() => {
    if (location.search.startsWith("?goToDemo")) {
      setTimeout(() => {
        HomeRef.current.scrollIntoView({ behavior: "smooth" })

        if (location.search.startsWith("?goToDemo&updated=true")) {
          setFormUpdated(true)
        }
      }, 100)
    }

    if (!IntersectionObserver) {
      setFeaturePlay(true)
      setCodeComparePlay(true)
    }

    const featureList = document.querySelector("#featureLast")
    const codeComparison = document.querySelector("#codeComparison")
    const rendering = document.querySelector("#rendering")
    const isolate = document.querySelector("#isolate")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === featureList && !isPlayFeature) {
            setFeaturePlay(true)
          }
          if (entry.target === codeComparison && !isPlayCodeCompare) {
            setCodeComparePlay(true)
          }
          if (entry.target === rendering && !isPlayRender) {
            setRenderPlay(true)
          }
          if (entry.target === isolate && !isIsolatePlay) {
            setIsolatePlay(true)
          }
        }
      })
    }, options)

    observer.observe(featureList)
    observer.observe(codeComparison)
    observer.observe(rendering)
    observer.observe(isolate)

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.root}>
      {showBuilder && (
        <Builder
          showBuilder
          toggleBuilder={toggleBuilder}
          HomeRef={HomeRef}
          defaultLang={defaultLang}
        />
      )}

      <Header homeRef={HomeRef} defaultLang={defaultLang} />

      <FeaturesList
        isPlayFeature={isPlayFeature}
        currentLanguage={currentLanguage}
      />

      <CodeCompareSection
        isPlayCodeCompare={isPlayCodeCompare}
        currentLanguage={currentLanguage}
      />

      <IsolateRender
        isIsolatePlay={isIsolatePlay}
        currentLanguage={currentLanguage}
      />

      <CodePerfCompareSection
        isPlayRender={isPlayRender}
        currentLanguage={currentLanguage}
      />

      <div ref={HomeRef} />

      <Form
        {...{
          onSubmit,
          submitData,
          toggleBuilder,
          formUpdated,
          currentLanguage,
        }}
      />

      <CenterContent>
        <H1>{home.findInteresting[currentLanguage].heading}</H1>
        <p>{home.findInteresting[currentLanguage].description}</p>
        <ButtonsGroup
          style={{
            maxWidth: 500,
          }}
        >
          <PrimaryButton
            onClick={() => {
              navigate(translateLink("get-started", currentLanguage))
            }}
          >
            {home.getStarted[currentLanguage]}
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              navigate(translateLink("api", currentLanguage))
            }}
          >
            API
          </PrimaryButton>
        </ButtonsGroup>
      </CenterContent>

      <FooterContent currentLanguage={currentLanguage} />
    </div>
  )
}

export default React.memo(HomePage)
