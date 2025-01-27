import React from 'react';

// components
import SubmitButton from './SubmitButton';
import PreviousButton from './PreviousButton';
import ProgressBar from './ProgressBar';

const QuestionTextInputSong = ({ step, setStep, song, setSong, section, setSection }) => {
  return (
    <>
      <h2>Song (Step 5 of 5)</h2>
      <section className="form__field song">
        <label id="textInputLabel" htmlFor="songTitle" className="form__question">What&apos;s a song that you can&apos;t get enough of right now?
          <input
            placeholder="Type the title here please..."
            name="goodSong"
            className="input"
            type="text"
            id="songTitleInput"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            autoComplete="off" />
        </label>
        <div className="helper" id="songTitleInput-helper">
  This question is optional
        </div>
      </section>
      <section className="form__navigation">
        <PreviousButton
          whatQuestionPrevious="fourthQuestion"
          section={section}
          setSection={setSection}
          setStep={setStep}
          whatStepBefore="4" />
        <SubmitButton
          whatQuestionNext="summary"
          defaultState=""
          currentState="Something"
          message=""
          section={section}
          setSection={setSection} />
      </section>
      <ProgressBar
        step={step} />
    </>
  )
}
export default QuestionTextInputSong;