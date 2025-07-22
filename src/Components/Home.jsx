import React from 'react'
import { FaCoffee } from 'react-icons/fa'

export default function Home() {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center">
            <div className="text-center">
                <FaCoffee className="mx-auto text-7xl text-primary mb-4" />
                <h1 className="text-5xl font-bold mb-2">Welcome to BD Coffee</h1>
                <p className="py-4 text-lg text-base-content">
                    Discover the finest coffee blends, fresh brews, and cozy vibes.
                </p>
                <div className="flex justify-center gap-4 mt-6">
                    <button className="btn btn-primary">Shop Now</button>
                    <button className="btn btn-outline btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Coffee Beans" className="h-48 w-full object-cover"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Premium Beans</h2>
                        <p>Handpicked, roasted to perfection for the best flavor.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80" alt="Fresh Brew" className="h-48 w-full object-cover"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Fresh Brew</h2>
                        <p>Enjoy a cup of freshly brewed coffee every day.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Cozy Ambience" className="h-48 w-full object-cover"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Cozy Ambience</h2>
                        <p>Relax and unwind in our warm and inviting space.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
