import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useLoginInUserMutation } from '../../redux/api/login';
import { useEffect } from 'react';
import { signIn } from '../../redux/slices/loginSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginInUserWithApi, { data, isSuccess }] = useLoginInUserMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate()
   
    const onFinish = (values) => {
        loginInUserWithApi(values)
    };
    useEffect(() => {
        if (isSuccess) {
            if (data?.access_token) { 
                dispatch(signIn(data.access_token));
                navigate("/") 
            } else {
                console.error("Token not found in API response.");
            }
        }

    }, [isSuccess, data, dispatch]);


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className="space-y-4"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-lg">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;
