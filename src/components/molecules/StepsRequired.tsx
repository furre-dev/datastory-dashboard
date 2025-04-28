import { Steps } from 'antd';

export default function StepsRequired({ stepIndex }: { stepIndex: number }) {
  return (
    <section className="fadeIn">
      <Steps
        direction="vertical"
        current={stepIndex}
        items={[
          {
            title: 'Select a country',
            description: "Please select a country from the country input."
          },
          {
            title: 'Select a measure',
            description: "Please select a measure from the measure input."
          },
        ]}
      />
    </section>
  )
}