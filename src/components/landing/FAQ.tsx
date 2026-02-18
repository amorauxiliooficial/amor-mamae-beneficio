import React, { useState } from 'react';
import { ArrowRight, ChevronUp } from 'lucide-react';
import { Button } from './Button';
import { FaqItem } from '@/types';

const faqData: FaqItem[] = [
  { question: "O que é Auxílio Maternidade", answer: "O Auxílio ou Salário Maternidade é um benefício previdenciário pago às mães que se afastam do trabalho por motivo de nascimento de filho, adoção ou guarda judicial para fins de adoção." },
  { question: "Quem pode solicitar?", answer: "Mães que contribuíram para o INSS, empregadas domésticas, trabalhadoras rurais, contribuintes individuais e facultativas, além de desempregadas que mantiveram a qualidade de segurada." },
  { question: "Qual o valor do benefício?", answer: "O valor varia entre R$ 6.484,00 a R$ 14.900,00, dependendo do histórico de contribuições e do salário de contribuição da segurada." },
  { question: "Quem paga esse benefício?", answer: "Para empregadas com carteira assinada, geralmente é a empresa que paga e depois é reembolsada pelo INSS. Para as demais categorias, o pagamento é feito diretamente pelo INSS." },
  { question: "Como funciona esse benefício?", answer: "É um valor pago mensalmente durante 120 dias (4 meses), podendo ser estendido em casos específicos. O benefício garante que a mãe tenha renda durante o período de afastamento." },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-brand-pink/10 rounded-3xl p-8 md:p-12 shadow-sm max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 space-y-6">
             <h3 className="text-muted-foreground uppercase text-sm font-semibold tracking-wider">A Amor tira todas as suas dúvidas</h3>
             <h2 className="text-2xl md:text-3xl font-bold text-brand-pink leading-tight">Se você quer saber mais sobre o seu benefício, entre em contato!</h2>
             <div className="pt-4"><Button variant="primary" onClick={() => window.open('https://wa.me/5511940372990?text=Quero%20falar%20com%20atendente', '_blank')}>Fale com um Consultor!</Button></div>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-muted-foreground/30 pb-4">
                <button onClick={() => toggle(index)} className="w-full flex items-center justify-between text-left py-2 hover:text-brand-pink transition-colors focus:outline-none">
                  <span className="text-foreground font-medium text-sm md:text-base">{item.question}</span>
                  {openIndex === index ? <ChevronUp className="text-muted-foreground" size={20} /> : <ArrowRight className="text-muted-foreground" size={20} />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-muted-foreground text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
