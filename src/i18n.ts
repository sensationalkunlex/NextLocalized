import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'pt'];
 
export default getRequestConfig(async ({locale}) => {
  console.log("locale",locale);
  debugger
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`../message/${locale}.json`)).default
  };
});
