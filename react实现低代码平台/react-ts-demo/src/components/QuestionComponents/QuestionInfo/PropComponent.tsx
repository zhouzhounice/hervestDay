import React, { FC, useEffect } from "react";
import { Form, Input } from "antd";
import { QuestionInfoPropsType } from "./index";
const { TextArea } = Input;

const PropsComponent: FC<QuestionInfoPropsType> = (
  props: QuestionInfoPropsType,
) => {
  const { title, desc, onChange, disabled } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, desc });
  }, [title, desc]);
  const handleValueChange = () => {
    if (onChange) {
      onChange(form.getFieldsValue());
    }
  };
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{ title, desc }}
      onValuesChange={handleValueChange}
      disabled={disabled}
    >
      <Form.Item
        label="标题内容"
        name="title"
        rules={[{ required: true, message: "请输入问卷标题" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="描述" name="desc">
        <TextArea />
      </Form.Item>
    </Form>
  );
};

export default PropsComponent;
