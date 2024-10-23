import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24'>
            <Card className='max-w-sm'>
                <CardHeader>
                    <Image
                        className='rounded-lg'
                        src='https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        alt='img'
                        width={500}
                        height={500}
                        priority
                    />
                </CardHeader>
            </Card>
        </main>
    );
};

export default HomePage;
