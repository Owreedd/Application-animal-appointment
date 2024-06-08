import React from 'react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Contactez-nous',
  description: 'Contactez-nous pour plus d\'informations',
};

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Contactez-nous</h1>
        <p className="mb-6 text-gray-700">
          Pour plus d'informations, n'hésitez pas à nous contacter via le formulaire ci-dessous ou par téléphone.
        </p>
      </section>

      <section className="mb-8">
        <form className="bg-white p-6 border rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 border rounded-lg w-full"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-lg w-full"/>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" className="mt-1 p-2 border rounded-lg w-full"></textarea>
          </div>
          <Button className="bg-blue-500" type="submit" variant="outline">Envoyer</Button>
        </form>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Ou nous trouver</h2>
        <p className="mb-2 text-gray-700">Adresse : 123 Rue Gambetta, 51100 REIMS</p>
        <p className="mb-2 text-gray-700">Téléphone : 01 23 45 67 89</p>
        <p className="mb-2 text-gray-700">Email : contact@exemple.com</p>
      </section>
    </div>
  );
};

export default Contact;
