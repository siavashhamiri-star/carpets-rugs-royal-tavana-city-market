
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading && Array.from({ length: 3 }).map((_, i) => <VendorCardSkeleton key={i} />)}
            
            {!loading && filteredVendors.map((vendor) => (
              <Card
                key={vendor.id}
                className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card"
              >
                <CardHeader className="flex-row items-center gap-4 p-6">
                  <Avatar className="w-16 h-16 border-2 border-primary/20">
                    <AvatarImage
                      src={vendor.avatarUrl}
                      alt={vendor.name}
                    />
                    <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-headline text-xl leading-tight flex items-center gap-2">
                      {vendor.name}
                      {vendor.isVerified && (
                          <ShieldCheck className="h-5 w-5 text-blue-500" title="Verified Vendor" />
                      )}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1 text-sm">
                      <MapPin className="w-3 h-3" />
                      {vendor.location}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vendor.specialties?.slice(0, 3).map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="font-normal"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {vendor.bio}
                  </p>
                </CardContent>
                <CardFooter className="p-4 bg-card-foreground/5 mt-auto">
                  <Button asChild className="w-full">
                    <Link href={`/vendors/${vendor.id}`}>View Showroom</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {!loading && filteredVendors.length === 0 && (
             <Card>
                <CardContent className="flex flex-col items-center justify-center text-center text-muted-foreground h-64">
                    <p>
                        {typedVendors.length > 0 ? "No vendors match your search." : "No vendors have registered yet."}
                    </p>
                    {typedVendors.length === 0 && (
                         <Button asChild variant="link" className="mt-2">
                            <Link href="/account/become-vendor">Be the first to become a vendor!</Link>
                        </Button>
                    )}
                </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
