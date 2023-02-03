import { withKnobs, array } from "@storybook/addon-knobs";
import DoneBoard from "@/components/DoneBoard.vue";

export default {
  title: "DoneBoard",
  component: DoneBoard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { DoneBoard },
  template: `
    <DoneBoard :done-items="doneItems"/>
  `,
  props: {
    doneItems: {
      default: array("Done Items", [
        { id: 1, todo: "Buy milk" },
        { id: 2, todo: "Take out the trash" }
      ])
    }
  }
});



