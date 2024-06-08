import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Découvrez',
  description: 'Découvrez nos services',
};

const Decouvrez = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-primary">Découvrez Nos Services</h2>
        <p className="mb-6 text-gray-700">
          Bienvenue sur notre page de découverte. Nous offrons une gamme complète de services pour répondre à vos besoins.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl items-center flex justify-center font-bold mb-4 text-primary">Nos Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="service-card p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <Image src="/serviceImg.jpg" alt="Service 1" width={400} height={300} className="rounded-lg"/>
            <h3 className="text-xl font-bold justify-center flex mt-2 text-primary">Service 1</h3>
            <p className="text-gray-700 flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="service-card p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <Image src="/serviceImg.jpg" alt="Service 2" width={400} height={300} className="rounded-lg"/>
            <h3 className="text-xl font-bold mt-2 text-primary flex justify-center">Service 2</h3>
            <p className="text-gray-700 flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-4 text-primary flex justify-center">Témoignages</h3>
        <div className="carousel">
          <div className="testimonial p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <p className="text-gray-700">"Excellent service, je recommande vivement!"</p>
            <p className="text-primary font-bold">- Jean Dupont</p>
          </div>
          <div className="testimonial p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <p className="text-gray-700">"Une équipe professionnelle et à l'écoute."</p>
            <p className="text-primary font-bold">- Marie Curie</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-3xl font-bold mb-4 text-primary flex justify-center">Notre Équipe</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="team-member p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <Image src="/serviceImg.jpg" alt="Membre de l'équipe 1" width={200} height={200} className="rounded-full mx-auto"/>
            <h3 className="text-xl font-bold mt-2 text-primary flex justify-center">Membre de l'équipe 1</h3>
            <p className="text-gray-700 flex justify-center">Directeur général</p>
          </div>
          <div className="team-member p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <Image src="/serviceImg.jpg" alt="Membre de l'équipe 2" width={200} height={200} className="rounded-full mx-auto"/>
            <h3 className="text-xl font-bold mt-2 text-primary flex justify-center">Membre de l'équipe 2</h3>
            <p className="text-gray-700 flex justify-center">Responsable marketing</p>
          </div>
          <div className="team-member p-4 border rounded-lg shadow-lg bg-white hover:bg-blue-50">
            <Image src="/serviceImg.jpg" alt="Membre de l'équipe 3" width={200} height={200} className="rounded-full mx-auto"/>
            <h3 className="text-xl font-bold mt-2 text-primary flex justify-center">Membre de l'équipe 3</h3>
            <p className="text-gray-700 flex justify-center">Développeur</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4 text-primary flex justify-center">Contactez-nous</h2>
        <p className="text-gray-700 mb-6">Pour plus d'informations, vous pouvez nous contacter via le formulaire ci-dessous ou par téléphone au 01 23 45 67 89.</p>
        <form className="contact-form bg-white p-4 border rounded-lg shadow-lg">
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
          <Button type="submit" variant="primary">Envoyer</Button>
        </form>
      </section>
    </div>
  );
};

export default Decouvrez;
