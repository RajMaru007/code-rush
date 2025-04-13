
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github, Mail } from 'lucide-react';

interface LoginFormProps {
  onSwitchTab: () => void;
}

const LoginForm = ({ onSwitchTab }: LoginFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted');
  };

  return (
    <div>
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access your account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <button 
              type="button" 
              className="text-sm text-coderush-purple hover:underline"
              onClick={() => console.log('Forgot password')}
            >
              Forgot password?
            </button>
          </div>
          <Input id="password" type="password" placeholder="••••••••" required />
        </div>
        
        <Button className="w-full bg-coderush-purple hover:bg-coderush-purple/90" type="submit">
          Login
        </Button>
      </form>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" type="button" className="w-full">
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" type="button" className="w-full">
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
      
      <p className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
        Don't have an account?{' '}
        <button 
          type="button" 
          className="text-coderush-purple hover:underline font-medium"
          onClick={onSwitchTab}
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
