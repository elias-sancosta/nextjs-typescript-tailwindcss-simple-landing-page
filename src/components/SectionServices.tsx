import Container from './Container';
import PhoneIcon from '@/assets/icon-phone.svg';
import SolutionsIcon from '@/assets/icon-solutions.svg';
import OptionsIcon from '@/assets/icon-options.svg';
import CardIcon from '@/assets/icon-card.svg';
import Image from 'next/image';
import ImagePhone from '@/assets/phone.png';

export default function SectionServices() {
  return (
    <section className="relative w-full h-[965px] ">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">
            serviços exclusivos
          </span>
          <h1 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h1>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itau de forma
            segura, rapida e o melhor, no conforto da sua casa
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={PhoneIcon} alt="Phone" />
              </div>

              <p className="flex-1 text-txt-gray pr-2">
                Acompanhar sua conta, fazer transferências e pagamentos de onde
                estiver
              </p>
            </li>
            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={SolutionsIcon} alt="Solutions" />
              </div>

              <p className="flex-1 text-txt-gray pr-2">
                Nunc a tellus eros. Nulla nec venenatis quam. Suspendisse
                blandit semper.
              </p>
            </li>
            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={OptionsIcon} alt="Phone" />
              </div>

              <p className="flex-1 text-txt-gray pr-2">
                Fusce consequat nulla eu suscipit rhoncus. Proin gravida velit
                non porta.
              </p>
            </li>
            <li className="flex items-center gap-10">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={CardIcon} alt="Phone" />
              </div>

              <p className="flex-1 text-txt-gray pr-2">
                Nam eu lacus accumsan, fringilla elit et, venenatis suscipit
                mattis dui.
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="flex items-center absolute top-0 right-0 w-[32%] h-full bg-gray-phone">
        <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]" />
      </div>
    </section>
  );
}
