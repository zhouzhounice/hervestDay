import React, { FC, useEffect } from "react";
import { Form, Input } from "antd";
import { QuestionInputPropsType } from "./index";

const PropsComponent: FC<QuestionInputPropsType> = (
  props: QuestionInputPropsType,
) => {
  const { title, placeholder } = props;
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ title, placeholder });
  }, [title, placeholder]);

  return (
    <Form layout="vertical" form={form} initialValues={{ title, placeholder }}>
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "请输入标题" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="placeholder" name="placeholder">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default PropsComponent;
