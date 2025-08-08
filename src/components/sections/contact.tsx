'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Instagram, ArrowRight} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Black fade at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your university sports to professional standards? 
            Let's discuss how we can increase your team's visibility and impact.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <a 
              href="mailto:info@varsifymedia.com" 
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">Email</div>
                <div className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                info@varsifymedia.com
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
            </a>

            <a 
              href="tel:+447547594134" 
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">Phone</div>
                <div className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  +44 7547 594134
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
            </a>

            <a 
              href="https://instagram.com/varsifymedia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">Instagram</div>
                <div className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  @varsifymedia
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Black fade at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-10"></div>
    </section>
  );
}