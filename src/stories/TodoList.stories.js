import { withKnobs, array } from "@storybook/addon-knobs";
import TodoList from "@/components/TodoList.vue";

export default {
  title: "TodoList",
  component: TodoList,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { TodoList },
  template: `
    <TodoList :todo-items="todoItems"/>
  `,
  props: {
    todoItems: {
      default: array("Todo Items", [
        { id: 1, todo: "Buy milk" },
        { id: 2, todo: "Take out the trash" },
      ]),
    },
  },
});
