import React, {RefObject} from "react";
import {Button, Form, Input} from "antd";
import {LayoutForm, LayoutFormButton} from "../../../config/layout";

interface ProfileRepassUIProps {
    formRef: RefObject<any>
    onFinishCallback: (values: any) => void
}

const ProfileRepassUI = (props: ProfileRepassUIProps) => {
    return (
        <div className="panel-body">
            <Form
                {...LayoutForm}
                name="basic"
                ref={props.formRef}
                onFinish={props.onFinishCallback}
            >
                <Form.Item
                    label="旧密码"
                    name="old_pwd"
                    rules={[
                        {
                            required: true,
                            message: '请输入旧密码!',
                        },
                    ]}
                >
                    <Input.Password placeholder="请输入旧密码"  />
                </Form.Item>

                <Form.Item
                    label="新密码"
                    name="new_pwd"
                    rules={[
                        {
                            required: true,
                            message: '请输入新密码!',
                        },
                    ]}
                >
                    <Input.Password placeholder="请输入新密码" />
                </Form.Item>
                <Form.Item
                    label="确认密码"
                    name="confirm_pwd"
                    rules={[
                        {
                            required: true,
                            message: '请再次输入新密码!',
                        },
                    ]}
                >
                    <Input.Password placeholder="请再次输入新密码" />
                </Form.Item>
                <Form.Item {...LayoutFormButton}>
                    <Button type="primary" htmlType="submit">保存</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProfileRepassUI