
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthCard = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 w-full max-w-md">
      <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm onSwitchTab={() => setActiveTab('signup')} />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm onSwitchTab={() => setActiveTab('login')} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthCard;
