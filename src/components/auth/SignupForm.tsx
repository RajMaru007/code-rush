
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Github, Mail } from 'lucide-react';

interface SignupFormProps {
  onSwitchTab: () => void;
}

const SignupForm = ({ onSwitchTab }: SignupFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup form submitted');
  };

  return (
    <div>
      <div className="space-y-2 text-center mb-6">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your details to create your CodeRush account</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" required />
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms" className="text-sm font-normal">
            I agree to the{' '}
            <a href="#" className="text-coderush-purple hover:underline">
              terms of service
            </a>{' '}
            and{' '}
            <a href="#" className="text-coderush-purple hover:underline">
              privacy policy
            </a>
          </Label>
        </div>
        
        <Button className="w-full bg-coderush-purple hover:bg-coderush-purple/90" type="submit">
          Create Account
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
        Already have an account?{' '}
        <button 
          type="button" 
          className="text-coderush-purple hover:underline font-medium"
          onClick={onSwitchTab}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignupForm;
