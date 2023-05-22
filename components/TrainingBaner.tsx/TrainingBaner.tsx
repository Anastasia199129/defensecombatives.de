import Container from '../Container/Container'
import data from './trainingBaner.json'

import s from './TrainingBaner.module.sass'

export default function TrainingBaner() {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapperContent}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.text,
            }}
          />
        </div>
      </Container>
    </section>
  )
}
